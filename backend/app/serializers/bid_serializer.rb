class BidSerializer < ActiveModel::Serializer
  attributes :amount, :bidder, :auction_id, :id, :created_at
end
