const http = uni.$u.http


// 获取首页
export const login_ = (params) => http.post('/login', params)

// 保存 身份证
export const save_card = (params) => http.post('/save-idcard', params)

// 生成账单
export const create_bill = (params) => http.post('/create-bill',params)

// 获取账单
export const get_bill = (params) => http.post('/get-bill',params)