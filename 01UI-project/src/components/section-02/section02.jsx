import { memo } from 'react';

const Setion02 = () => {
  return (
<div class="hide-scrollbar flex gap-4 overflow-x-auto p-4">
  <div class="w-64 shrink-0 rounded-xl bg-blue-100 p-6">Card 1</div>
  <div class="w-64 shrink-0 rounded-xl bg-green-100 p-6">Card 2</div>
  <div class="w-64 shrink-0 rounded-xl bg-green-100 p-6">Card 2</div>
  <div class="w-64 shrink-0 rounded-xl bg-green-100 p-6">Card 2</div>
  <div class="w-64 shrink-0 rounded-xl bg-green-100 p-6">Card 2</div>
  <div class="w-64 shrink-0 rounded-xl bg-green-100 p-6">Card 2</div>
  <div class="w-64 shrink-0 rounded-xl bg-green-100 p-6">Card 2</div>
  <div class="w-64 shrink-0 rounded-xl bg-yellow-100 p-6">Card 3</div>
</div>
  );
};

export default memo(Setion02);