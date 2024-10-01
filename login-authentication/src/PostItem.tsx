import React from "react";
import { IPost } from "./interface/IPost";

export interface ICommon {
  i: number;
}

export interface IPostPageProps extends ICommon {
  d: IPost;
  children: React.ReactNode;
}

export default function PostIteam(p: IPostPageProps) {
  return (
    <>
      <tr>
        <td>{p.i}</td>

        <td>{p.d.title}</td>
        <td>{p.d.body}</td>
      </tr>
    </>
  );
}

// PostIteam.defaultProps = {
//   i: 0,
// };
