import React from "react";
import Link from "next/link";
import Image from "next/image";
import dayjs from "@/libs/dayjs";

type PostCardPropsType = {
  slug: string;
  thumbnail: string;
  title: string;
  description: string;
  date: string;
  locale: string;
};

const PostCard = (props: PostCardPropsType) => {
  return (
    <Link
      className="max-w-sm w-full lg:max-w-full lg:flex hover:-translate-y-1 hover:opacity-90 transition-transform"
      href={`/blog/${props.slug}`}
    >
      <div
        className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t-lg lg:rounded-t-none lg:rounded-l-lg text-center overflow-hidden bg-center border border-r-0"
        style={{ backgroundImage: `url(${props.thumbnail})` }}
        title=""
      ></div>
      <div className="bg-white rounded-b-lg lg:rounded-b-none lg:rounded-r-lg p-4 flex flex-col justify-between leading-normal border border-l-0">
        <div className="mb-8">
          <div className="text-gray-900 font-bold text-xl mb-2">
            {props.title}
          </div>
          <p className="text-gray-700 text-base">{props.description}</p>
        </div>
        <div className="flex items-center">
          <Image
            width={40}
            height={40}
            className="w-10 h-10 rounded-full mr-4"
            src="/images/uploads/celo-reis.jpg"
            alt="Avatar of Jonathan Reinink"
          />
          <div className="text-sm">
            <p className="text-gray-900 leading-none">Celo Reis</p>
            <p className="text-gray-600">
              {dayjs(props.date).locale(props.locale).format("LLL")}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PostCard;
