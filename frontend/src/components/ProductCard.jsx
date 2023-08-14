import React from 'react'

function ProductCard(props) {
  return (
    <>
      <article
        className="shrink-0 w-40 overflow-hidden rounded-lg bg-white shadow-sm"
      >
        <img
          alt="Office"
          src={props.imgProduct}
          className="h-32 w-full object-cover"
        />

        <div className="p-2 px-4">
          <a href={props.linkProduct} target="_blank">
            <h3 className="text-lg font-medium text-gray-900">
              {props.title}
            </h3>
          </a>

          <p className="mt-1 line-clamp-3 text-sm/relaxed text-gray-500">
            Rp.{props.price}
          </p>

          <a
            href={props.linkProduct}
            target="_blank"
            className="group mt-2 inline-flex items-center gap-1 text-sm font-medium text-blue-600"
          >
            Shop Now

            <span
              aria-hidden="true"
              className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
            >
              &rarr;
            </span>
          </a>
        </div>
      </article>
    </>
  )
}

export default ProductCard