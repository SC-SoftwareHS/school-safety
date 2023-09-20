const TestPage: React.FC = () => (
  <div className="h-screen">
    <div className="lg:grid lg:grid-cols-2 lg:gap-8">
      <div className="w-4/5">
        <h1 className="text-4xl font-bold ">Improve Your Safety Without Spending a Fortune.</h1>
        <p className="text-gray-700 text-regular text-base pt-4">
          Here are our achievements, which we're going to mention here.
        </p>
      </div>
      <div className="lg:grid lg:grid-cols-2 lg:gap-y-8 lg:mx-auto w-full lg:w-3/5">
        <div className="flex flex-col mt-4 lg:mt-0">
          <h1 className="text-2xl font-bold">10,000</h1>
          <p className="text-gray-700">downloads</p>
        </div>
        <div className="flex flex-col mt-4 lg:mt-0">
          <h1 className="text-2xl font-bold">4</h1>
          <p className="text-gray-700">awards</p>
        </div>
        <div className="flex flex-col mt-4 lg:mt-0">
          <h1 className="text-2xl font-bold">3,000</h1>
          <p className="text-gray-700">hours</p>
        </div>
        <div className="flex flex-col mt-4 lg:mt-0">
          <h1 className="text-2xl font-bold">17</h1>
          <p className="text-gray-700">libraries</p>
        </div>
      </div>
    </div>
  </div>
)
export default TestPage
