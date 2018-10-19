class AuctionSerializer < ActiveModel::Serializer
  has_many :bids
  attributes :id, :item_name, :item_description, :start_date, :end_date, :item_pic, :seller, :bids
end
