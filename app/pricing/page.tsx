const PricingPage: React.FC = () => {
  return (
    <div className="bg-primary-500">
      <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 sm:pt-20 sm:pb-24 lg:max-w-7xl lg:pt-24 lg:px-8">
        <h2 className="text-3xl font-extrabold text-white tracking-tight">
          And many more features
        </h2>
        <p className="mt-4 max-w-3xl text-lg text-primary-200">
          Queue dont change how you use Notion, it just adds the ability for you to review,
          schedule, publish, and track your posts, all in one place. HA
        </p>
        <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-16">
          <div>
            <div>
              <span className="flex items-center justify-center h-12 w-12 rounded-md bg-white bg-opacity-10">
                <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="0"
                  viewBox="0 0 24 24"
                  className="h-6 w-6 text-white"
                  aria-hidden="true"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                  ></path>
                </svg>
              </span>
            </div>
            <div className="mt-6">
              <h3 className="text-lg font-medium text-white">Schedule Threads</h3>
              <p className="mt-2 text-base text-primary-200">
                Create and schedule threads with Notion blocks like texts, images, GIFs, lists,
                to-dos, bookmarks, etc.
              </p>
            </div>
          </div>
          <div>
            <div>
              <span className="flex items-center justify-center h-12 w-12 rounded-md bg-white bg-opacity-10">
                <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="0"
                  viewBox="0 0 24 24"
                  className="h-6 w-6 text-white"
                  aria-hidden="true"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
                  ></path>
                </svg>
              </span>
            </div>
            <div className="mt-6">
              <h3 className="text-lg font-medium text-white">Any Database</h3>
              <p className="mt-2 text-base text-primary-200">
                Connect to any databases and views that you're using. No need to change your
                workflow.
              </p>
            </div>
          </div>
          <div>
            <div>
              <span className="flex items-center justify-center h-12 w-12 rounded-md bg-white bg-opacity-10">
                <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="0"
                  viewBox="0 0 24 24"
                  className="h-6 w-6 text-white"
                  aria-hidden="true"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2"
                  ></path>
                </svg>
              </span>
            </div>
            <div className="mt-6">
              <h3 className="text-lg font-medium text-white">Content Pipeline</h3>
              <p className="mt-2 text-base text-primary-200">
                Create a Board view to build a content pipeline, from ideas, to in-progress, review,
                and publish.
              </p>
            </div>
          </div>
          <div>
            <div>
              <span className="flex items-center justify-center h-12 w-12 rounded-md bg-white bg-opacity-10">
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  className="h-6 w-6 text-white"
                  aria-hidden="true"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                  ></path>
                </svg>
              </span>
            </div>
            <div className="mt-6">
              <h3 className="text-lg font-medium text-white">Content Archive</h3>
              <p className="mt-2 text-base text-primary-200">
                Keep a copy of your posts in your Notion for reference in other places, without
                doing any extra work.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default PricingPage
