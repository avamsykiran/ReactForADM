import axios from 'axios';

const itemsUrl = "http://localhost:9999/items";

class ItemService {

    getAll(){
        return axios.get(itemsUrl);
    }

    getById(id){
        //return axios.get(itemsUrl+"/"+id);
        return axios.get(`${itemsUrl}/${id}`);
    }

    add(item){
        return axios.post(itemsUrl,item);
    }

    update(item,id){
        return axios.put(`${itemsUrl}/${id}`,item);
    }

    remove(id){
        return axios.delete(`${itemsUrl}/${id}`);
    }
}

const itemService = new ItemService();

export default itemService;