import TrashIcon from '../icons/TrashIcon';
import { Column, Id } from '../types';

interface Props {
  column: Column;
  deleteColumn: (id: Id) => void;
}

const ColumnContainer = (props: Props) => {
  const { column, deleteColumn } = props;

  return (
    <div className="bg-columnBackgroundColor w-[350px] h-[500px] max-w-[350px] rounded-md flex flex-col">
      {/* Column title */}
      <div className="bg-columnBackgroundColor w-[350px] h-[60px] text-md cursor-grab rounded rounded-b-none font-bold border-columnBackgroundColor border-4 flex items-center justify-between">
        <div className="flex gap-2">
          <div className="flax justify-center items-center bg-columnBackgroundColor px-2 py-1 text-sm rounded-full">
            0
          </div>
          {column.title}
        </div>
        <button
          onClick={() => {
            deleteColumn(column.id);
          }}
          className="stroke-gray-500 hover:stroke-white hover:bg-columnBackgroundColor rounded px-1 py-2"
          type="button"
          title="Delete"
        >
          <TrashIcon />
        </button>
      </div>
      {/* Column task container */}
      <div className="flex flex-grow">Content</div>
      {/* Column Footer */}
      <div>Footer</div>
    </div>
  );
};

export default ColumnContainer;
