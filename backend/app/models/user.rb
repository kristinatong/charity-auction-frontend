class User < ApplicationRecord
  has_many :auctions, foreign_key: "seller_id"
  has_many :bids, foreign_key: "bidder_id"
  has_many :auctions, through: :bids
end
