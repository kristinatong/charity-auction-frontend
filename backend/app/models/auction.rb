class Auction < ApplicationRecord
  belongs_to :seller, class_name: "User"
  has_many :bids
  has_many :bidders, through: :bids, class_name: "User"
end
