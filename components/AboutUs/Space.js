import React from "react";

const Space = () => {
  return (
    <div className="lg:pt-40">
      {/* Mobile view */}
      <div className="lg:hidden">
        <div className="md:max-w-[768px] mx-auto">
          <img
            src="https://images.unsplash.com/photo-1560624052-449f5ddf0c31?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            className="md:w-[768px]"
            alt="space-1"
          />
          <p className="mt-5 mb-12 text-[15px]">
            Tầng trệt với không gian ra sao đó tạo cảm giác sao đó
          </p>
        </div>
        <div className="md:max-w-[768px] mx-auto">
          <img
            src="https://images.unsplash.com/photo-1613274554329-70f997f5789f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            className="md:w-[768px] md:mx-auto"
            alt="space-2"
          />
          <p className="mt-5 mb-12 text-[15px]">
            Tầng trệt với không gian ra sao đó tạo cảm giác sao đó
          </p>
        </div>

        <div className="md:max-w-[768px] mx-auto">
          <img
            src="https://images.unsplash.com/photo-1533630654593-b222d5d44449?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            className="md:w-[768px] md:mx-auto"
            alt="space-3"
          />
          <p className="mt-5 mb-12 text-[15px]">
            Tầng trệt với không gian ra sao đó tạo cảm giác sao đó
          </p>
        </div>

        <div className="md:max-w-[768px] mx-auto">
          <img
            src="https://images.unsplash.com/photo-1568861743148-db325d9383bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            className="md:w-[768px] md:mx-auto"
            alt="space-4"
          />
          <p className="mt-5 mb-12 text-[15px]">
            Tầng trệt với không gian ra sao đó tạo cảm giác sao đó
          </p>
        </div>
      </div>

      {/* Laptop view */}
      <div className="hidden lg:inline-block lg:w-full lg:text-center">
        <div className="group relative w-[600px] inline-block mt-[150px] mr-[60px]">
          <img
            src="https://images.unsplash.com/photo-1613274554329-70f997f5789f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            alt="space-2"
          />
          <div className="opacity-0 group-hover:opacity-100 absolute bg-black bg-opacity-70 w-full top-0 bottom-0 right-0 transition-all duration-500 flex flex-col justify-center">
            <div className="w-1/3 h-[1px] bg-white bg-opacity-30 mx-auto"></div>
            <div className="my-[200px]">
              <p className="text-white text-[16px] opacity-60">Tầng 2</p>
              <p className="text-white text-3xl font-semibold">
                Không gian sao sao đó
              </p>
            </div>
            <div className="w-1/3 h-[1px] bg-white bg-opacity-30 mx-auto"></div>
          </div>
        </div>

        <div className="group relative w-[600px] inline-block align-top">
          <img
            src="https://images.unsplash.com/photo-1560624052-449f5ddf0c31?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt="space-1"
          />
          <div className="opacity-0 group-hover:opacity-100 absolute bg-black bg-opacity-70 w-full top-0 bottom-0 right-0 transition-all duration-500 flex flex-col justify-center">
            <div className="w-1/3 h-[1px] bg-white bg-opacity-30 mx-auto"></div>
            <div className="my-[200px]">
              <p className="text-white text-[16px] opacity-60">Tầng 1</p>
              <p className="text-white text-3xl font-semibold">
                Không gian sao sao đó
              </p>
            </div>
            <div className="w-1/3 h-[1px] bg-white bg-opacity-30 mx-auto"></div>
          </div>
        </div>

        <div className="group relative w-[600px] inline-block mt-[150px] mr-[60px]">
          <img
            src="https://images.unsplash.com/photo-1533630654593-b222d5d44449?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            alt="space-3"
          />
          <div className="opacity-0 group-hover:opacity-100 absolute bg-black bg-opacity-70 w-full top-0 bottom-0 right-0 transition-all duration-500 flex flex-col justify-center">
            <div className="w-1/3 h-[1px] bg-white bg-opacity-30 mx-auto"></div>
            <div className="my-[200px]">
              <p className="text-white text-[16px] opacity-60">Nhà bếp</p>
              <p className="text-white text-3xl font-semibold">
                Không gian sao sao đó
              </p>
            </div>
            <div className="w-1/3 h-[1px] bg-white bg-opacity-30 mx-auto"></div>
          </div>
        </div>

        <div className="group relative w-[600px] inline-block align-top">
          <img
            src="https://images.unsplash.com/photo-1568861743148-db325d9383bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            alt="space-4"
          />
          <div className="opacity-0 group-hover:opacity-100 absolute bg-black bg-opacity-70 w-full top-0 bottom-0 right-0 transition-all duration-500 flex flex-col justify-center">
            <div className="w-1/3 h-[1px] bg-white bg-opacity-30 mx-auto"></div>
            <div className="my-[200px]">
              <p className="text-white text-[16px] opacity-60">Nội thất</p>
              <p className="text-white text-3xl font-semibold">
                Không gian sao sao đó
              </p>
            </div>
            <div className="w-1/3 h-[1px] bg-white bg-opacity-30 mx-auto"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Space;
