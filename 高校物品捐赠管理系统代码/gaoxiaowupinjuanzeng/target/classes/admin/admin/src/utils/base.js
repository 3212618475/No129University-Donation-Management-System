const base = {
    get() {
        return {
            url : "http://localhost:8080/gaoxiaowupinjuanzeng/",
            name: "gaoxiaowupinjuanzeng",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/gaoxiaowupinjuanzeng/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "高校物品捐赠管理系统"
        } 
    }
}
export default base
