---
en:
  seo:
    title: Why you shouldn't use Vercel for your dashboard app
    description: Why you shouldn't use Vercel for your dashboard app
    image: ""
  body: >
    *Next.js* is a powerful React framework, widely celebrated for its
    **server-side rendering (SSR)** and **static site generation (SSG)**
    capabilities. However, when it comes to **client-side rendered (CSR)**
    applications, Next.js can introduce unnecessary complexity and overhead.
    Below is an in-depth look at why Next.js might not be the best choice for
    pure CSR projects.


    ---


    ## Contents


    ---


    ## Introduction


    Next.js is renowned for features like **automatic code splitting**, **server-side rendering**, and **file-based routing**. These features are great for content-rich websites and applications that benefit from SSR or SSG. However, if your project is a pure **client-side rendered (CSR)** app, many of these benefits become redundant—potentially adding extra layers of complexity without offering performance gains.


    > **Note:** This document uses a variety of Markdown features such as headings, lists, tables, code blocks, blockquotes, images, links, and horizontal rules to provide a comprehensive overview.


    ---


    ## Understanding Next.js and CSR


    - **Next.js**:
      - Optimized for **SSR** and **SSG**.
      - Offers **file-based routing** and **API routes**.
      - Best suited for applications that need pre-rendering for SEO or initial load performance.

    - **Client-Side Rendering (CSR)**:
      - Renders the UI directly in the browser.
      - Commonly used with libraries like **Create React App (CRA)** or **Vite**.
      - Focuses on dynamic, interactive applications where SSR benefits are minimal.

    ---


    ## Key Drawbacks for CSR Apps


    ### Overhead and Complexity


    - **Unnecessary SSR Setup**:  
      Next.js comes with built-in SSR support, which is an extra layer if your application doesn't require server-rendered pages.




      
    - **Larger Bundle Sizes**:  
      Bundles may include SSR-related code that is never utilized, potentially increasing load times.




      
    - **Steeper Learning Curve**:  
      Developers must understand both CSR and SSR paradigms, even if only CSR is needed.

    ### Performance Considerations


    - **Hydration Overhead**:  
      Although Next.js handles hydration for SSR, in a CSR context this can introduce redundant processing steps.




      
    - **Delayed Interactivity**:  
      Extra abstractions may delay the point at which your app becomes interactive compared to more streamlined CSR tools.

    ### Routing and Structure


    - **File-Based Routing Constraints**:  
      Next.js enforces a file-based routing system which might not offer the flexibility required for highly dynamic CSR apps.




      
    - **Opinionated Architecture**:  
      The framework’s conventions and structure can be overkill if your needs are strictly client-side, leading to potential refactoring challenges.

    ---


    ## Comparison Table


    | Feature                     | Next.js (CSR Scenario)         | Alternatives (e.g., CRA, Vite)  |

    |-----------------------------|--------------------------------|---------------------------------|

    | **Complexity**              | Higher (due to SSR/SSG layers) | Lower (focused on CSR only)     |

    | **Bundle Size**             | Potentially larger             | Optimized for client-side usage |

    | **Routing Flexibility**     | File-based (less flexible)     | Customizable routing            |

    | **Performance (CSR Focus)** | May incur hydration overhead   | Streamlined and efficient       |


    ---


    ## Code Example


    Below is a simple example of a client-side rendered component in Next.js. Notice that even though it’s rendered on the client, the framework still loads additional SSR capabilities:


    ```typescript {2,4-6} showLineNumbers

    import React from 'react';


    const HomePage = () => (
      <div>
        <h1>Welcome to a Client-Side Rendered Page</h1>
        <p>This page uses Next.js, but many SSR features are unused.</p>
      </div>
    );


    export default HomePage;
  title: Why you shouldn't use Vercel for your dashboard app
  thumbnail: https://res.cloudinary.com/dr0fyonps/image/upload/c_scale,f_auto,q_auto,w_800/v1740242458/cld-sample-2.jpg
  date: 2025-02-22T11:29:00.000Z
  tags: react,next,vercel
pt:
  seo:
    image: ""
  thumbnail: https://res.cloudinary.com/dr0fyonps/image/upload/c_scale,f_auto,q_auto,w_800/v1740242458/cld-sample-2.jpg
  date: 2025-02-22T11:29:00.000Z
  tags: react,next,vercel
es:
  seo:
    image: ""
  thumbnail: https://res.cloudinary.com/dr0fyonps/image/upload/c_scale,f_auto,q_auto,w_800/v1740242458/cld-sample-2.jpg
  date: 2025-02-22T11:29:00.000Z
  tags: react,next,vercel
---
