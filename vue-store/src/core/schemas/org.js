export const orgSchema = {
  created: String,
  creator: String,
  deleted: Boolean,
  enableIpwhitelist: Boolean,
  id: String,
  joinToken: String,
  name: String,
  ownerId: String
}

export const orgBaseSchema = {
  created: '',
  creator: '',
  deleted: false,
  enableIpwhitelist: false,
  id: '',
  joinToken: '',
  name: '',
  ownerId: ''
}
