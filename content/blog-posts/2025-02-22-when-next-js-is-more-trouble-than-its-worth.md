---
en:
  body: >-
    When developing internal applications—such as dashboards, administrative
    panels, or company-specific tools—search engine optimization (SEO) is often
    a non-factor. These applications exist behind authentication barriers and
    serve a predefined group of users. Despite this, many teams opt for Next.js
    simply due to its popularity and reputation as a modern web framework. While
    Next.js excels in SEO-oriented, public-facing applications, it may introduce
    unnecessary complexity, cost, and maintenance challenges for applications
    that do not require server-side rendering (SSR) or static site generation
    (SSG). 


    This article critically examines whether Next.js is the optimal choice for client-side-only applications. Whether you are a mid-level developer weighing architectural trade-offs or a senior developer assessing long-term feasibility, this discussion will provide insights to help inform your decision. The observations herein are primarily based on experiences with the App Router in Next.js.


    ## Deployment Costs: Paying for Unnecessary Infrastructure


    Next.js is engineered to maximize the benefits of SSR, making it well-suited for SEO-driven, public-facing websites. However, for internal applications restricted to authenticated users, these advantages become moot. The high costs associated with server-side rendering can be difficult to justify when an internal tool is designed purely for client-side execution. Moreover, these costs are compounded by unnecessary complexity in deployment configurations and maintenance requirements.


    Deploying a Next.js application on a platform like Vercel incurs costs associated with SSR, even when SEO is irrelevant. This is analogous to maintaining a gym membership solely for access to a treadmill that could be purchased for home use. If an internal tool is intended for a small user base, investing in SSR infrastructure is an avoidable expenditure. Beyond the financial costs, the additional complexity of setting up and maintaining SSR infrastructure creates overhead that smaller teams or non-technical stakeholders may struggle to manage effectively. 


    The computational resources required for SSR can also introduce performance bottlenecks that negatively impact user experience. If the majority of your application logic and UI rendering happens client-side, the inclusion of SSR may slow down build times and introduce caching inefficiencies that would not exist in a simpler client-rendered application. This means that teams may not only be paying extra for an unnecessary feature but may also inadvertently introduce technical hurdles that hinder their development velocity. 


    For organizations mindful of expenses, reducing infrastructure overhead is essential. When an internal application is utilized by a limited set of employees, an SSR-centric deployment model becomes financially inefficient. Instead, leveraging **Create React App (CRA)** or **Vite** enables applications to be served with minimal resource requirements, such as static hosting via AWS S3 or a JAMstack approach, both of which offer more cost-effective deployment options. Additionally, static file hosting eliminates the need for costly server environments and enables greater scalability without ongoing infrastructure investments. 


    ## Complexity and Cognitive Overhead


    Next.js is inherently designed to accommodate both server-side and client-side rendering. While this dual capability benefits public websites, it introduces unnecessary complexity for purely client-rendered applications. Teams that only need client-side rendering must invest time into understanding and circumventing default Next.js behaviors that do not align with their needs. The result is additional boilerplate code, increased cognitive load, and a more challenging development experience. 


    Developers must account for both client-side and server-side execution, even when server-side processing is irrelevant. This requires additional boilerplate to disable SSR for client-only components, creating an additional layer of complexity. Moreover, default behaviors such as automatic prefetching and server execution of certain functions may result in unexpected side effects that developers must work around.


    ```typescript

    "use client";

    import React from 'react'


    const MostComponents = () => {
      useEffect(() => {
        someFunction() // This needs to run only in the browser, otherwise it will break the build
      }, [])
      return (
        <div>This Sucks!!!</div>
      )
    }


    export default MostComponents

    ```


    For junior and mid-level developers still acclimating to React and Node.js, these intricacies can be a roadblock. Special attention is required when selecting dependencies, avoiding SSR-incompatible hooks, and ensuring proper delineation between client-side and server-side logic. Even though Next.js provides mechanisms to enforce client-side execution (e.g., `"use client"`), its pervasiveness throughout the application necessitates constant adjustments. 


    The complexity is further exacerbated when integrating third-party libraries. Some libraries assume a purely client-side environment and may break when executed in SSR mode, requiring additional effort to conditionally load them or refactor code to avoid server execution. These additional steps increase development time and create maintenance burdens for teams already managing tight deadlines. 


    ## Opinionated Framework with Hidden Abstractions


    Next.js incorporates many built-in optimizations that facilitate public web applications but may introduce hidden behavior that complicates debugging and customization. It abstracts many functionalities, such as automatic code splitting, image optimization, and prefetching. While these features improve performance for public websites, they can be counterproductive in applications where such optimizations are unnecessary. Debugging issues stemming from opaque framework behaviors can be an arduous process.


    During integration testing, I've faced issues due to Next.js's hidden magic. For example, [msw](https://mswjs.io/), a tool for intercepting and mocking network requests, can behave unexpectedly because Next.js overrides the global fetch function and imposes additional caching logic. While such optimizations improve SSR performance, they can interfere with testing methodologies that rely on deterministic request handling.


    ```typescript

    import JSDOMEnvironment from "jest-environment-jsdom";

    import { fetch } from "undici";


    export default class FixJSDOMEnvironment extends JSDOMEnvironment {
      constructor(...args: ConstructorParameters<typeof JSDOMEnvironment>) {
        super(...args);
        this.global.fetch = fetch as any;
      }
    }

    ```


    Similarly, modifying page metadata dynamically within a client-side application may require workarounds. Next.js prioritizes SSR-first design, restricting metadata updates to the generateMetadata function. While this approach is logical for SEO-driven applications, it imposes unnecessary constraints on projects that require dynamic title management and doesn't care about SEO.


    ## Unstable Framework


    Next.js is a rapidly evolving framework, which can introduce instability and migration challenges. As the framework grows, it frequently undergoes significant changes that impact development workflows, forcing teams to continually adapt to new paradigms. While innovation is beneficial, rapid iteration can create friction for teams that require long-term stability and predictable updates.


    Next.js aggressively integrates cutting-edge features, sometimes before they are fully stabilized. A prime example is its premature adoption of Server Components in Next.js 13, leading to numerous unforeseen issues and regressions. Developers who migrated early found themselves dealing with unexpected behavior, performance bottlenecks, and incomplete documentation. This level of volatility complicates long-term application maintenance, especially for teams prioritizing stability and predictability. For organizations that require strict version control and reliability, these frequent changes can be a major deterrent. 


    The pace of Next.js updates also presents challenges in keeping dependencies up to date. New releases often introduce breaking changes that require teams to refactor parts of their applications. This constant need for updates increases development overhead, particularly for organizations that rely on a stable, well-documented framework. Without a clear roadmap, teams may find it difficult to plan long-term development strategies. 🛠️


    ## Ecosystem Lock-In


    Next.js is tightly coupled with Vercel’s hosting platform. While Vercel provides seamless deployment, optimized performance, and advanced features, reliance on this ecosystem creates vendor lock-in. Many of Next.js’s most attractive features—such as edge functions, image optimization, and ISR (Incremental Static Regeneration)—are designed to work best within the Vercel environment, making it difficult to migrate to alternative hosting solutions.


    Transitioning away from Vercel often requires significant refactoring due to deep framework integration. Teams that wish to host Next.js applications on AWS, DigitalOcean, or self-managed infrastructure must implement workarounds to replicate Vercel’s functionality. This migration process can be costly, time-consuming, and technically complex, particularly for larger applications with deep dependencies on Next.js-specific features.


    Additionally, Next.js’s file-based routing structure may further entrench project dependencies. While file-based routing simplifies development for small to mid-sized applications, it can be restrictive for larger applications that require more flexible routing architectures. Over time, teams may find themselves constrained by Next.js conventions, making it difficult to restructure applications or migrate to different frameworks. 


    ## Alternative Frameworks and Build Tools


    For projects where Next.js is overkill, several alternative solutions offer greater flexibility and simplicity:


    * **[Vite](https://vite.dev/)** – A high-performance build tool optimized for client-side React applications, featuring fast module replacement and simplified deployments via static bundling. Vite is particularly well-suited for single-page applications that do not require SSR, providing a more streamlined and developer-friendly experience.

    * **[Remix](https://remix.run/)** – A progressive enhancement-oriented React framework with nested routing and optional SSR, allowing for greater control over rendering strategies. Remix is a good choice for teams that need some level of server-side functionality but prefer more explicit control over its implementation.

    * **[Webpack with React](https://webpack.js.org/)** – While requiring manual configuration, Webpack affords full control over the build process, making it an ideal choice for teams seeking a customizable setup. This flexibility is valuable for enterprises with highly specific performance and optimization requirements.


    These alternatives allow teams to avoid unnecessary SSR complexities while maintaining an efficient, client-focused development workflow. By selecting the appropriate tool based on project requirements, developers can optimize their workflow while reducing maintenance burdens. 


    ## Conclusion


    Ultimately, selecting the appropriate tool hinges on aligning the framework’s capabilities with the project’s specific needs. While Next.js is an excellent choice for SEO-sensitive applications, internal applications benefit from simplicity, cost efficiency, and maintainability—attributes better supported by client-side-focused frameworks. Avoiding unnecessary SSR and infrastructure overhead can lead to a more streamlined development process and better long-term maintainability.
  title: When Next.js Is More Trouble Than It’s Worth
  date: 2025-02-22T19:22:00.000Z
  thumbnail: https://res.cloudinary.com/dr0fyonps/image/upload/c_scale,f_auto,q_auto,w_800/v1740242450/samples/landscapes/nature-mountains.jpg
  tags: nextjs,react
  seo:
    title: When Next.js Is More Trouble Than It’s Worth
    description: Discover why Next.js may be overkill for internal CSR apps and
      explore lean, cost-effective alternatives for efficient client-side
      development.
pt:
  date: 2025-02-22T19:22:00.000Z
  thumbnail: https://res.cloudinary.com/dr0fyonps/image/upload/c_scale,f_auto,q_auto,w_800/v1740242450/samples/landscapes/nature-mountains.jpg
  tags: nextjs,react
  seo:
    ? image
  body: >-
    Ao desenvolver aplicações internas—como dashboards, painéis administrativos
    ou ferramentas específicas da empresa—otimização para mecanismos de busca
    (SEO) geralmente não é um fator relevante. Essas aplicações ficam atrás de
    barreiras de autenticação e servem a um grupo de usuários pré-definido.
    Apesar disso, muitas equipes optam por Next.js simplesmente por sua
    popularidade e reputação como um framework web moderno. Embora o Next.js
    seja excelente para aplicações voltadas ao público e orientadas a SEO, ele
    pode introduzir complexidade desnecessária, custos adicionais e desafios de
    manutenção para aplicações que não exigem renderização no servidor (SSR) ou
    geração de sites estáticos (SSG).


    Este artigo examina criticamente se o Next.js é a escolha ideal para aplicações exclusivamente no cliente. Seja você um desenvolvedor pleno avaliando trade-offs arquiteturais ou um desenvolvedor sênior analisando a viabilidade a longo prazo, esta discussão fornecerá insights para ajudar na sua decisão. As observações aqui apresentadas são baseadas, principalmente, em experiências com o App Router do Next.js.


    ## Custos de Implantação: Pagando por Infraestrutura Desnecessária


    O Next.js é projetado para maximizar os benefícios da SSR, tornando-se uma escolha adequada para sites públicos voltados a SEO. No entanto, para aplicações internas restritas a usuários autenticados, essas vantagens se tornam irrelevantes. Os altos custos associados à renderização no servidor podem ser difíceis de justificar quando uma ferramenta interna é projetada apenas para execução no cliente. Além disso, esses custos são ampliados pela complexidade desnecessária na configuração e manutenção da implantação.


    Implantar uma aplicação Next.js em uma plataforma como Vercel acarreta custos relacionados à SSR, mesmo quando o SEO é irrelevante. Isso é semelhante a pagar uma academia apenas para usar uma esteira que poderia ser comprada para uso doméstico. Se uma ferramenta interna é destinada a um pequeno grupo de usuários, investir em infraestrutura para SSR é um gasto evitável. Além do custo financeiro, a complexidade adicional na configuração e manutenção da infraestrutura SSR cria uma sobrecarga que equipes menores ou stakeholders não técnicos podem ter dificuldades em gerenciar.


    Os recursos computacionais necessários para a SSR também podem introduzir gargalos de desempenho que impactam negativamente a experiência do usuário. Se a maior parte da lógica da aplicação e da renderização da interface acontece no cliente, a inclusão da SSR pode desacelerar os tempos de build e introduzir ineficiências de cache que não existiriam em uma aplicação renderizada exclusivamente no cliente. Isso significa que as equipes não apenas pagam a mais por um recurso desnecessário, mas também podem, inadvertidamente, adicionar obstáculos técnicos que prejudicam a velocidade de desenvolvimento.


    Para organizações preocupadas com despesas, reduzir a sobrecarga de infraestrutura é essencial. Quando uma aplicação interna é utilizada por um conjunto limitado de funcionários, um modelo de implantação centrado em SSR se torna financeiramente ineficiente. Em vez disso, utilizar **Create React App (CRA)** ou **Vite** permite que as aplicações sejam servidas com requisitos mínimos de recursos, como hospedagem estática via AWS S3 ou um modelo JAMstack, ambos oferecendo opções de implantação mais econômicas. Além disso, a hospedagem de arquivos estáticos elimina a necessidade de ambientes de servidor caros e possibilita maior escalabilidade sem investimentos contínuos em infraestrutura.


    ## Complexidade e Sobrecarga Cognitiva


    O Next.js é projetado para acomodar tanto a renderização no servidor quanto no cliente. Embora essa capacidade dupla beneficie sites públicos, ela adiciona complexidade desnecessária para aplicações puramente renderizadas no cliente. Equipes que precisam apenas de renderização no cliente devem investir tempo para entender e contornar comportamentos padrão do Next.js que não atendem às suas necessidades. O resultado é mais código boilerplate, maior carga cognitiva e uma experiência de desenvolvimento mais desafiadora.


    Os desenvolvedores precisam levar em conta tanto a execução no cliente quanto no servidor, mesmo quando o processamento no servidor é irrelevante. Isso exige código extra para desativar a SSR em componentes exclusivamente do cliente, adicionando uma camada adicional de complexidade. Além disso, comportamentos padrão, como pré-busca automática e execução no servidor de determinadas funções, podem gerar efeitos colaterais inesperados que os desenvolvedores devem contornar.


    ```typescript

    "use client";

    import React from 'react'


    const MostComponents = () => {
      useEffect(() => {
        someFunction() // Isso precisa rodar apenas no navegador, caso contrário, quebra o build
      }, [])
      return (
        <div>Isso é frustrante!!!</div>
      )
    }


    export default MostComponents

    ```


    Para desenvolvedores juniores e plenos que ainda estão se acostumando com React e Node.js, essas nuances podem ser um obstáculo. É necessário um cuidado especial na escolha de dependências, na evitação de hooks incompatíveis com SSR e na separação adequada entre lógica do lado do cliente e do servidor. Mesmo que o Next.js forneça mecanismos para forçar a execução no cliente (por exemplo, `"use client"`), sua presença constante na aplicação exige ajustes frequentes.


    A complexidade é ainda maior ao integrar bibliotecas de terceiros. Algumas bibliotecas assumem um ambiente exclusivamente no cliente e podem falhar ao serem executadas no modo SSR, exigindo esforço extra para carregá-las condicionalmente ou refatorar o código para evitar a execução no servidor. Esses passos adicionais aumentam o tempo de desenvolvimento e criam encargos de manutenção para equipes com prazos apertados.


    ## Framework Opinativo com Abstrações Ocultas


    O Next.js incorpora muitas otimizações embutidas que facilitam aplicações públicas, mas podem introduzir comportamentos ocultos que complicam a depuração e a personalização. Ele abstrai várias funcionalidades, como divisão automática de código, otimização de imagens e pré-busca. Embora esses recursos melhorem o desempenho de sites públicos, eles podem ser contraproducentes em aplicações onde tais otimizações são desnecessárias. Depurar problemas decorrentes dessas abstrações pode ser um processo árduo.


    Durante testes de integração, já enfrentei problemas devido à "magia" oculta do Next.js. Por exemplo, a biblioteca [msw](https://mswjs.io/), usada para interceptar e simular requisições de rede, pode se comportar de maneira inesperada porque o Next.js substitui a função global `fetch` e impõe lógica de cache adicional. Embora essas otimizações melhorem a performance de SSR, elas podem interferir em metodologias de teste que dependem de controle determinístico das requisições.


    ## Framework Instável


    O Next.js é um framework em rápida evolução, o que pode introduzir instabilidade e desafios de migração. Seu crescimento constante resulta em mudanças frequentes que impactam fluxos de desenvolvimento, forçando equipes a se adaptarem continuamente a novos paradigmas. Embora a inovação seja positiva, atualizações rápidas podem criar atrito para equipes que necessitam de estabilidade a longo prazo.


    O Next.js integra agressivamente recursos de ponta, às vezes antes de estarem totalmente estabilizados. Um exemplo disso foi a adoção prematura dos Server Components no Next.js 13, causando inúmeros problemas imprevistos e regressões. Desenvolvedores que migraram cedo tiveram que lidar com comportamentos inesperados, gargalos de desempenho e documentação incompleta.


    ## Alternativas ao Next.js


    Para projetos onde o Next.js é um exagero, algumas alternativas oferecem maior flexibilidade e simplicidade:


    * **[Vite](https://vite.dev/)** – Uma ferramenta de build de alto desempenho otimizada para aplicações React no cliente, com substituição rápida de módulos e implantação simplificada via bundling estático.

    * **[Remix](https://remix.run/)** – Um framework baseado em aprimoramento progressivo com roteamento aninhado e SSR opcional, oferecendo maior controle sobre as estratégias de renderização.

    * **[React com Webpack](https://webpack.js.org/)** – Embora exija configuração manual, oferece controle total sobre o processo de build, sendo ideal para equipes com requisitos altamente específicos.


    ## Conclusão


    Escolher a ferramenta certa depende de alinhar as capacidades do framework com as necessidades específicas do projeto. O Next.js é excelente para aplicações orientadas a SEO, mas aplicações internas se beneficiam mais da simplicidade, eficiência de custos e manutenção reduzida—aspectos melhor atendidos por frameworks voltados ao cliente.
  title: Quando não compensa usar Next.js
es:
  body: >-
    Al desarrollar aplicaciones internas, como paneles de control, áreas
    administrativas o herramientas específicas de la empresa, la optimización
    para motores de búsqueda (SEO) suele no ser un factor determinante. Estas
    aplicaciones se encuentran protegidas por barreras de autenticación y están
    destinadas a un grupo predefinido de usuarios. Sin embargo, muchos equipos
    optan por Next.js simplemente por su popularidad y reputación como un
    framework web moderno. Aunque Next.js sobresale en aplicaciones públicas
    orientadas al SEO, puede introducir complejidad, costos adicionales y
    desafíos de mantenimiento innecesarios en aplicaciones que no requieren
    renderizado en el servidor (SSR) ni generación de sitios estáticos (SSG).

    Este artículo examina críticamente si Next.js es la elección óptima para aplicaciones que se ejecutan exclusivamente en el lado del cliente. Ya sea que seas un desarrollador de nivel medio evaluando compensaciones arquitectónicas o un desarrollador senior analizando la viabilidad a largo plazo, esta discusión te brindará ideas útiles para tomar una decisión informada. Las observaciones aquí presentadas se basan, principalmente, en experiencias con el App Router de Next.js.

    ## Costos de Despliegue: Pagar por Infraestructura Innecesaria

    Next.js está diseñado para maximizar los beneficios del SSR, lo que lo hace ideal para sitios web públicos orientados al SEO. Sin embargo, en aplicaciones internas restringidas a usuarios autenticados, estas ventajas resultan irrelevantes. Los altos costos asociados al renderizado en el servidor pueden resultar difíciles de justificar cuando una herramienta interna se diseña únicamente para la ejecución en el cliente. Además, dichos costos se ven incrementados por la complejidad innecesaria en la configuración de despliegue y en los requisitos de mantenimiento.

    Desplegar una aplicación Next.js en una plataforma como Vercel genera costos asociados al SSR, incluso cuando el SEO no es relevante. Esto es similar a mantener una membresía en un gimnasio solo para usar una cinta de correr que podría comprarse para el hogar. Si una herramienta interna está destinada a un número reducido de usuarios, invertir en infraestructura de SSR es un gasto evitable. Más allá del costo financiero, la complejidad adicional para configurar y mantener la infraestructura SSR crea una sobrecarga que equipos pequeños o partes interesadas no técnicas pueden tener dificultades para gestionar.

    Los recursos computacionales requeridos para el SSR pueden generar cuellos de botella en el rendimiento que impacten negativamente en la experiencia del usuario. Si la mayor parte de la lógica de la aplicación y la renderización de la interfaz se realiza en el cliente, incluir SSR puede ralentizar los tiempos de compilación e introducir ineficiencias en el manejo de caché que no existirían en una aplicación renderizada únicamente en el cliente. Esto significa que los equipos no solo están pagando de más por una funcionalidad innecesaria, sino que además pueden verse afectados por obstáculos técnicos que impiden una mayor velocidad en el desarrollo.

    Para organizaciones atentas a los costos, reducir la sobrecarga de infraestructura es esencial. Cuando una aplicación interna es utilizada por un grupo limitado de empleados, un modelo de despliegue centrado en SSR resulta financieramente ineficiente. En su lugar, utilizar **Create React App (CRA)** o **Vite** permite que las aplicaciones se sirvan con requerimientos mínimos de recursos, como el alojamiento estático mediante AWS S3 o un enfoque JAMstack, opciones que ofrecen despliegues más económicos. Además, el hosting de archivos estáticos elimina la necesidad de entornos de servidor costosos y posibilita una mayor escalabilidad sin inversiones continuas en infraestructura.

    ## Complejidad y Sobrecarga Cognitiva

    Next.js está concebido para soportar tanto el renderizado en el servidor como el del cliente. Si bien esta capacidad dual beneficia a los sitios públicos, introduce complejidad innecesaria en aplicaciones que se renderizan únicamente en el cliente. Los equipos que requieren solo renderizado en el cliente deben invertir tiempo en comprender y sortear los comportamientos predeterminados de Next.js que no se ajustan a sus necesidades. El resultado es la introducción de código adicional (boilerplate), un incremento en la carga cognitiva y una experiencia de desarrollo más complicada.

    Los desarrolladores deben tener en cuenta tanto la ejecución en el cliente como en el servidor, aun cuando el procesamiento del lado del servidor sea irrelevante. Esto implica escribir código extra para desactivar el SSR en componentes que se ejecutan solo en el cliente, añadiendo una capa extra de complejidad. Además, comportamientos predeterminados como la pre-carga automática y la ejecución en el servidor de ciertas funciones pueden generar efectos secundarios inesperados que hay que solucionar.

    ```typescript

    "use client";

    import React from 'react'

    const MostComponents = () => {
      useEffect(() => {
        someFunction() // Esto debe ejecutarse únicamente en el navegador, de lo contrario romperá la compilación
      }, [])
      return (
        <div>¡Esto es un fastidio!</div>
      )
    }

    export default MostComponents

    ```

    Para desarrolladores junior y de nivel medio que aún se están familiarizando con React y Node.js, estas complejidades pueden representar un obstáculo. Es necesario prestar especial atención al seleccionar dependencias, evitar hooks incompatibles con SSR y asegurar una correcta separación entre la lógica del cliente y la del servidor. Aunque Next.js ofrece mecanismos para forzar la ejecución en el cliente (por ejemplo, "use client"), su presencia en toda la aplicación requiere ajustes constantes.

    La complejidad se agrava al integrar bibliotecas de terceros. Algunas de ellas asumen un entorno puramente del lado del cliente y pueden fallar al ejecutarse en modo SSR, lo que obliga a realizar esfuerzos adicionales para cargarlas de forma condicional o refactorizar el código para evitar su ejecución en el servidor. Estos pasos adicionales incrementan el tiempo de desarrollo y generan cargas de mantenimiento para equipos que ya manejan plazos ajustados.

    ## Framework Opinativo con Abstracciones Ocultas

    Next.js incorpora muchas optimizaciones integradas que facilitan el desarrollo de aplicaciones públicas, pero que pueden introducir comportamientos ocultos que complican la depuración y la personalización. El framework abstrae muchas funcionalidades, como la división automática de código, la optimización de imágenes y la pre-carga. Si bien estas características mejoran el rendimiento en sitios públicos, pueden resultar contraproducentes en aplicaciones donde tales optimizaciones no son necesarias. Depurar problemas derivados de comportamientos opacos del framework puede convertirse en un proceso arduo.

    Durante las pruebas de integración, he enfrentado inconvenientes debido a la "magia oculta" de Next.js. Por ejemplo, [msw](https://mswjs.io/), una herramienta para interceptar y simular solicitudes de red, puede comportarse de manera inesperada porque Next.js sobrescribe la función global fetch e impone lógica adicional de caché. Aunque estas optimizaciones mejoran el rendimiento del SSR, pueden interferir con metodologías de prueba que dependen de un manejo determinista de las solicitudes.

    ```typescript {7}

    import JSDOMEnvironment from "jest-environment-jsdom"; import { fetch } from "undici";

    export default class FixJSDOMEnvironment extends JSDOMEnvironment {
      constructor(...args: ConstructorParameters<typeof JSDOMEnvironment>) {
        super(...args);
        this.global.fetch = fetch as any;
      }
    }

    ```

    De manera similar, modificar dinámicamente los metadatos de la página en una aplicación del lado del cliente puede requerir soluciones alternativas. Next.js prioriza un diseño orientado al SSR, restringiendo las actualizaciones de metadatos a la función generateMetadata. Aunque este enfoque resulta lógico para aplicaciones orientadas al SEO, impone restricciones innecesarias en proyectos que requieren una gestión dinámica de los títulos y que no se preocupan por el SEO.

    ## Framework Inestable

    Next.js es un framework en constante evolución, lo que puede introducir inestabilidad y desafíos a la hora de migrar. A medida que el framework crece, se producen cambios significativos que afectan los flujos de desarrollo, obligando a los equipos a adaptarse continuamente a nuevos paradigmas. Aunque la innovación es beneficiosa, las iteraciones rápidas pueden generar fricciones para aquellos equipos que necesitan estabilidad a largo plazo y actualizaciones predecibles.

    Next.js integra de forma agresiva características vanguardistas, a veces antes de que estén completamente estabilizadas. Un ejemplo de ello es la adopción prematura de los Server Components en Next.js 13, lo que condujo a numerosos problemas imprevistos y regresiones. Los desarrolladores que migraron tempranamente se encontraron lidiando con comportamientos inesperados, cuellos de botella en el rendimiento y documentación incompleta. Este nivel de volatilidad complica el mantenimiento a largo plazo de la aplicación, especialmente para equipos que priorizan la estabilidad y la previsibilidad. Para organizaciones que requieren un control estricto de versiones y fiabilidad, estos cambios frecuentes pueden resultar un obstáculo importante.

    El ritmo de actualizaciones de Next.js también presenta desafíos para mantener las dependencias al día. Las nuevas versiones a menudo introducen cambios disruptivos que obligan a los equipos a refactorizar partes de sus aplicaciones. Esta necesidad constante de actualización incrementa la carga de desarrollo, particularmente en organizaciones que dependen de un framework estable y bien documentado. Sin una hoja de ruta clara, puede resultar difícil planificar estrategias de desarrollo a largo plazo. 🛠️

    ## Dependencia del Ecosistema

    Next.js está fuertemente ligado a la plataforma de alojamiento de Vercel. Aunque Vercel ofrece despliegues sin fricciones, rendimiento optimizado y características avanzadas, depender de este ecosistema puede generar un encierro con el proveedor. Muchas de las funciones más atractivas de Next.js —como las funciones edge, la optimización de imágenes y la regeneración estática incremental (ISR)— están diseñadas para funcionar de manera óptima dentro del entorno de Vercel, dificultando la migración a soluciones de alojamiento alternativas.

    Migrar fuera de Vercel suele requerir una refactorización significativa debido a la profunda integración del framework. Los equipos que deseen alojar aplicaciones Next.js en AWS, DigitalOcean u otra infraestructura autogestionada deben implementar soluciones para replicar la funcionalidad que ofrece Vercel. Este proceso de migración puede resultar costoso, llevar mucho tiempo y ser técnicamente complejo, especialmente en aplicaciones de gran escala con dependencias profundas de características específicas de Next.js.

    Además, la estructura de enrutamiento basada en archivos de Next.js puede reforzar las dependencias del proyecto. Aunque este método simplifica el desarrollo en aplicaciones pequeñas y medianas, puede resultar restrictivo para proyectos más grandes que requieren arquitecturas de enrutamiento más flexibles. Con el tiempo, los equipos pueden sentirse limitados por las convenciones de Next.js, lo que dificulta la reestructuración de la aplicación o la migración a otro framework.

    ## Frameworks y Herramientas de Build Alternativas

    Para proyectos en los que Next.js resulta excesivo, existen varias alternativas que ofrecen mayor flexibilidad y simplicidad:

    * [**Vite**](https://vite.dev/) – Una herramienta de build de alto rendimiento optimizada para aplicaciones React en el cliente, con recarga rápida de módulos y despliegues simplificados mediante bundling estático. Vite es especialmente adecuado para aplicaciones de una sola página que no requieren SSR, proporcionando una experiencia de desarrollo más ágil y amigable.

    * [**Remix**](https://remix.run/) – Un framework orientado al mejoramiento progresivo, con enrutamiento anidado y SSR opcional, que permite un mayor control sobre las estrategias de renderizado. Remix es una opción interesante para equipos que necesitan cierta funcionalidad del lado del servidor pero prefieren un control más explícito sobre su implementación.

    * [**Webpack con React**](https://webpack.js.org/) – Aunque requiere configuración manual, Webpack permite un control total sobre el proceso de build, siendo ideal para equipos que buscan una configuración personalizada. Esta flexibilidad resulta valiosa para empresas con requisitos muy específicos en términos de rendimiento y optimización.

    Estas alternativas permiten a los equipos evitar las complejidades innecesarias del SSR, manteniendo un flujo de trabajo eficiente centrado en el cliente. Al elegir la herramienta adecuada en función de los requisitos del proyecto, los desarrolladores pueden optimizar su proceso de trabajo y reducir las cargas de mantenimiento.

    ## Conclusión

    En última instancia, la elección de la herramienta adecuada depende de alinear las capacidades del framework con las necesidades específicas del proyecto. Aunque Next.js es una excelente opción para aplicaciones orientadas al SEO, las aplicaciones internas se benefician más de la simplicidad, la eficiencia en costos y la facilidad de mantenimiento, características que se potencian mejor en frameworks centrados en el cliente. Evitar el SSR y la sobrecarga de infraestructura innecesaria puede conducir a un proceso de desarrollo más ágil y a un mantenimiento a largo plazo más sostenible.
  title: Cuando no compensa usar Next.js
  date: 2025-02-22T19:22:00.000Z
  thumbnail: https://res.cloudinary.com/dr0fyonps/image/upload/c_scale,f_auto,q_auto,w_800/v1740242450/samples/landscapes/nature-mountains.jpg
  tags: nextjs,react
  seo:
    title: Cuando no compensa usar Next.js
    description: Descubre por qué Next.js puede ser excesivo para aplicaciones
      internas y explora alternativas eficientes y rentables para el desarrollo
      centrado en el cliente.
---
