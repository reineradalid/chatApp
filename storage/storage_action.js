import {async_storage} from './init'
export async function storeData(key, value){
    try {
        await async_storage.clear()
        await async_storage.setItem(key, value)
    } catch (e) {
      // saving error
      console.log(e);
    }
}


export async function getData(key){
    try {
      const value = await async_storage.getItem(key)
      if(value !== null) {
        // value previously stored
        //console.log('GET DATA ', value);
        return value;
      }
    } catch(e) {
        console.log(e);
    }
}
