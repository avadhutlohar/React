import React from "react";
import Dropdown from "./Dropdown";
import DragAndDrop from "./DragAndDrop";
import uploadIcon from '../assets/uploadIcon.png'

const Card = () => {
  return (
    <div class="flex justify-center items-center h-screen">
      <div class="card w-96  max-w-md mx-auto bg-white shadow-md rounded-md overflow-hidden">
        <div class="card-header bg-gray-200 px-4 py-2">
          <h1 class="text-xl font-bold">Title</h1>
          <p>carrier</p>
          <Dropdown />
        </div>

        <div class="card-body text-center px-4 py-2">
          
          <DragAndDrop />
          <p class="text-sm">Support Excel file only</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
