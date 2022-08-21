export const findCellByName = (name, arr) => {
  for(var index=0; index< arr.length; index++) {
    if(arr[index].module === name) {
      return arr[index];
    }
  }
}