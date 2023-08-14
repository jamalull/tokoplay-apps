import React, { useContext } from 'react'
import { GlobalContext } from "../context/GlobalContext";

export default function CommentList(props) {
  const { state, handlefunction } = useContext(GlobalContext);
  const { dataComment, inputComment } = state;
  const { handleInputComment, handleSubmitComment } = handlefunction;

  return (
    <>
      <div className="flex max-[900px]:flex-col gap-4 comment-field mx-10 mt-8">
        <div className="overflow-y-scroll comment-box h-44 rounded-lg border flex-grow p-2">
          <ul>
              {(dataComment !== null) && 
                dataComment.map((res,index) => {
                  if(res.videoId == props.videoId){
                    return(
                      <li key={index} className="flex gap-2 ">
                        <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt=""  className="rounded-full mt-1" />
                        <div>
                          <p className="text-sm text-yellow-400">{res.username}</p>
                          <p className="text-comment text-xs mb-2">{res.comment}</p>
                        </div>
                      </li>
                    )
                  } 
                }
                )
              }
              <li> <p className="center">Comment Will be display in here ...</p> </li>
          </ul>
        </div>
        
        <form onSubmit={handleSubmitComment}>
          <div className="lg:w-96 flex flex-col gap-2">

              <input
                onChange={handleInputComment}
                value={inputComment.videoId = props.videoId}
                type="Number"
                name="videoId"
                id="videoId"
                className="sr-only"
                // className="p-3 peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
              />

            <label
              htmlFor="username"
              className="relative mr-2 flex-1 block rounded-lg border border-gray-200 shadow-sm focus-within:border-green-500/50 focus-within:ring-1 focus-within:ring-green-500/50"
            >
              <input
                onChange={handleInputComment}
                value={inputComment.username}
                type="text"
                name="username"
                id="username"
                className="p-3 peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
                placeholder="username"
              />

              <span
                className="pointer-events-none absolute start-5 top-0 -translate-y-1/2 p-0.5 bg-[#242424] text-xs text-white transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs"
              >
                Type Your Username
              </span>
            </label>

            <label
              htmlFor="comment"
              className="relative mt-2 mr-2 flex-1 block rounded-lg border border-gray-200 shadow-sm focus-within:border-green-500/50 focus-within:ring-1 focus-within:ring-green-500/50"
            >
              <input
                onChange={handleInputComment}
                value={inputComment.comment}
                type="text"
                name="comment"
                id="comment"
                className="p-3 peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
                placeholder="comment"
              />

              <span
                className="pointer-events-none absolute start-5 top-0 -translate-y-1/2 p-0.5 bg-[#242424] text-xs text-white transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs"
              >
                Comment Here
              </span>
            </label>

            <button className="bg-slate-500 hover:bg-slate-600 rounded-lg p-3">
              Send Comment
            </button>
          </div>
        </form>
      </div>
    </>
  )
}
