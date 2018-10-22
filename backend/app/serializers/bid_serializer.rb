class BidSerializer < ActiveModel::Serializer
  attributes :amount, :bidder_id, :auction_id, :id
end
