class UserSerializer < ActiveModel::Serializer
  has_many :auctions
  attributes :id, :name, :email, :password, :prof_pic, :auctions
end
