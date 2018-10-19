class Api::V1::AuctionsController < ApplicationController
  def index
    @auctions = Auction.all
    render json: @auctions
  end

  def create
    @auction = Auction.create(auction_params)
    @auctions = Auction.all
    render json: @auctions
  end


# Auction.create({item_name:"whatever",item_description:"desc",item_pic:"tbd", seller_id:1})
    def auction_params
      params.permit(:item_name, :item_description, :start_date, :end_date, :item_pic, :seller_id)
    end


end
