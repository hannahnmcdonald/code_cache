import {Textarea} from "@heroui/react";

export default function Notes() {
  return (
    <div className="p-5">
        <Textarea
             isReadOnly
             className="notes"
            defaultValue="lorem ipsum"
            //   label="Description"
             labelPlacement="outside"
            placeholder="Enter your description"
            variant="bordered"
        />
    </div>
  );
}
