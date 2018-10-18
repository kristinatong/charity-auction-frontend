class Api::V1::AuctionsController < ApplicationController
  def index
    @auctions = Auction.all
    render json: @auctions
  end
end
