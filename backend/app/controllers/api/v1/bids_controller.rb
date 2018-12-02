class Api::V1::BidsController < ApplicationController

  def index
    @bids = Bid.all
    render json: @bids
  end

  def create
    @bid = Bid.create(bid_params)
    # @bids = Bid.all
    render json: @bid
  end

  def bid_params
    params.permit(:amount, :bidder_id, :auction_id)
  end

end
