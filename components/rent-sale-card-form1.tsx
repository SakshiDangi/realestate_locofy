import type { NextPage } from "next";
import "antd/dist/antd.min.css";
import { Menu, Dropdown, Button } from "antd";
import {
  DownOutlined,
  ArrowLeftOutlined,
  ArrowRightOutlined,
  CalendarOutlined,
  CheckOutlined,
  ClockCircleOutlined,
  CloseOutlined,
  DeleteOutlined,
  EditOutlined,
  ExclamationCircleOutlined,
  HeartOutlined,
  LeftOutlined,
  LockOutlined,
  MailOutlined,
  PaperClipOutlined,
  PhoneOutlined,
  QuestionCircleOutlined,
  ReloadOutlined,
  RightOutlined,
  SearchOutlined,
  SendOutlined,
  ShareAltOutlined,
  UserOutlined,
} from "@ant-design/icons";

const RentSaleCardForm1: NextPage = () => {
  return (
    <div className="self-stretch flex flex-col items-center justify-start gap-[17px] text-center text-base text-darkslateblue-200 font-body-regular-600">
      <div className="flex flex-row items-start justify-start gap-[10px]">
        <button className="cursor-pointer [border:none] py-3 px-6 bg-primary-500 rounded overflow-hidden flex flex-row items-start justify-start">
          <div className="relative text-base leading-[24px] font-medium font-body-regular-600 text-gray-white text-center">
            Rent
          </div>
        </button>
        <button className="cursor-pointer [border:none] py-3 px-6 bg-gray-white rounded overflow-hidden flex flex-row items-start justify-start">
          <div className="relative text-base leading-[24px] font-medium font-body-regular-600 text-primary-400 text-center">
            Sale
          </div>
        </button>
      </div>
      <div className="self-stretch flex flex-row flex-wrap items-start justify-center">
        <div className="flex-1 rounded-lg bg-gray-white flex flex-row py-8 px-[62px] box-border items-center justify-between max-w-[1400px] md:w-[300px] md:flex-col md:gap-[20px] md:items-start md:justify-start md:ml-[auto] md:mr-[auto]">
          <div className="w-[137px] flex flex-col items-start justify-start gap-[16px]">
            <div className="relative leading-[24px] capitalize font-semibold">
              Locations
            </div>
            <Dropdown
              overlay={
                <Menu>
                  {(
                    [{ value: "New York" }, { value: "Los Angeles" }] as any
                  ).map((option: any, index: number) => (
                    <Menu.Item key={index}>
                      <a onClick={(e) => e.preventDefault()}>
                        {option.value || ""}
                      </a>
                    </Menu.Item>
                  ))}
                </Menu>
              }
              placement="bottomLeft"
              trigger={["hover"]}
            >
              <Button onClick={(e) => e.preventDefault()}>
                {`Select your city `}
                <DownOutlined />
              </Button>
            </Dropdown>
          </div>
          <select className="w-[177px] flex flex-col items-start justify-start" />
          <select className="w-[155px] flex flex-col items-start justify-start" />
          <button className="cursor-pointer [border:none] py-3 px-6 bg-primary-500 rounded w-[102px] flex flex-row box-border items-center justify-center hover:bg-darkslateblue-100 md:w-full md:hover:items-center md:hover:justify-center sm:self-stretch sm:w-auto sm:max-w-full sm:hover:self-stretch sm:hover:w-auto sm:hover:max-w-full">
            <div className="relative text-base leading-[24px] font-medium font-body-regular-600 text-gray-white text-center">
              Search
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RentSaleCardForm1;
