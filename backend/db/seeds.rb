# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
#

User.destroy_all
Bid.destroy_all
Auction.destroy_all

puts "making users"
User.create({name: "kristina", email:"a@aol.com", password:"password", prof_pic:"tbd"})
User.create({name: "Michael", email:"justin1@aol.com", password:"password", prof_pic:"tbd"})
User.create({name: "Andrew", email:"justin2@aol.com", password:"password", prof_pic:"tbd"})
User.create({name: "Jesse", email:"justin3@aol.com", password:"password", prof_pic:"tbd"})
User.create({name: "Olivia", email:"justin4@aol.com", password:"password", prof_pic:"tbd"})
puts "done making users"

puts "making auctions"
Auction.create({item_name:"whatever",item_description:"desc",item_pic:"tbd", seller_id:User.first.id, start_date: DateTime.new(2018,10,23,4,5,6), end_date: DateTime.new(2018,11,23,4,5,6)})
Auction.create({item_name:"item",item_description:"desc",item_pic:"tbd", seller_id:User.first.id,start_date: DateTime.new(2018,10,23,4,5,6), end_date: DateTime.new(2019,10,23,4,5,6)})
Auction.create({item_name:"flute",item_description:"desc",item_pic:"tbd", seller_id:User.first.id,start_date: DateTime.new(2018,10,23,4,5,6), end_date: DateTime.new(2018,10,23,4,5,6)})
Auction.create({item_name:"tuba",item_description:"desc",item_pic:"tbd", seller_id:User.first.id,start_date: DateTime.new(2018,10,23,4,5,6), end_date: DateTime.new(2018,10,23,4,5,6)})
Auction.create({item_name:"trumpet",item_description:"desc",item_pic:"tbd", seller_id:User.first.id,start_date: DateTime.new(2018,10,23,4,5,6), end_date: DateTime.new(2018,10,23,4,5,6)})

puts "done making auctions"

puts "making bids"
Bid.create({amount:10,bidder_id:User.first.id,auction_id:Auction.first.id})
Bid.create({amount:10,bidder_id:User.first.id,auction_id:Auction.first.id})
Bid.create({amount:10,bidder_id:User.first.id,auction_id:Auction.first.id})
Bid.create({amount:10,bidder_id:User.first.id,auction_id:Auction.first.id})
Bid.create({amount:10,bidder_id:User.first.id,auction_id:Auction.last.id})
puts "done making bids"
