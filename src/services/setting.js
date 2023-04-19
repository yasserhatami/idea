import Api from "@/utils/axios";

const setting = {
    getSidebarMenuItems: async () => {
        return await Api({
            url: '/Administration/GetAllMenues',
        }).then(res => {
            return res.data
        })
    },
}

export default setting

