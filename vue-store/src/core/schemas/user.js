export const userSchema = {
  language: String,
  id: String,
  email: String,
  avatar: String,
  created: String,
  background: String,
  birthday: String,
  lastLogin: String,
  mainAccount: Number,
  metadata: String,
  mobile: String,
  name: String,
  state: Number,
  timeZone: String
}

export const userBaseSchema = {
  language: 'zh-CN',
  id: '',
  email: '',
  avatar: '',
  created: '',
  background: '',
  birthday: '',
  lastLogin: '',
  mainAccount: 0,
  metadata: '',
  mobile: '',
  name: '',
  state: 0,
  timeZone: 'GMT+:08:00'
}
