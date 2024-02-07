import {Pagination, Button} from "@nextui-org/react";
import React from "react";

const ModulPage = (props) => 
{
  const increasePage = () => props.setCurrentPage((oldValue) => (oldValue < props.pages-1 ? oldValue + 1 : oldValue))
  const decreasePage = () => props.setCurrentPage((oldValue) => (oldValue >= 1 ? oldValue - 1 : oldValue))
  
    return (
        <div className="flex flex-col gap-5 place-items-center">
          <Pagination
                total={props.pages}
                color="secondary"
                page={props.currentPage+1}
                onChange={props.setCurrentPage}
                classNames={{
                    base: "pt-[50px] pb-[10px] px-[20px]",
                    item: "pointer-events-none",
                    cursor: "bg-[#ff6f7b]"
                }}
          />
          <div className="flex gap-2">
              <Button
                  size="sm"
                  variant="flat"
                  color="secondary"
                  className={"bg-[#ff6f7b] text-white"}
                  onPress={decreasePage}>
                Previous
              </Button>
              <Button
                  size="sm"
                  variant="flat"
                  color="secondary"
                  className={"bg-[#ff6f7b] text-white"}
                  onPress={increasePage}>
                Next
            </Button>
          </div>
        </div>
      );
}
export default ModulPage;