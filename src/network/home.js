import {request} from './request';

export function getHomeMultidata(){
    return request({
        url: '/home/data?type=sell&page=1'
    })
}