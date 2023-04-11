import Api from "@/utils/axios";

// const setting = {
//     getSidebarMenuItems: async (data) => {
//         return await Api({
//             url: '/menu',
//         }).then(res => {
//             return res.data
//         })
//     },
// }

export function getSidebarMenuItems() {
    Api({url: '/menu'}).then(res => {
        console.log('res', res)
    })
}

// export function  ...
// export default setting