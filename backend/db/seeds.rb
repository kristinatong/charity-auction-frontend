# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
#
User.create({name: "kristina", email:"adsfasdfasdf@aol.com", password:"password", prof_pic:"tbd"})
User.create({name: "Michael", email:"justin1@aol.com", password:"password", prof_pic:"tbd"})
User.create({name: "Andrew", email:"justin2@aol.com", password:"password", prof_pic:"tbd"})
User.create({name: "Jesse", email:"justin3@aol.com", password:"password", prof_pic:"tbd"})
User.create({name: "Olivia", email:"justin4@aol.com", password:"password", prof_pic:"tbd"})

Auction.create({item_name:"whatever",item_description:"desc",item_pic:"tbd", seller_id:1})
Auction.create({item_name:"item",item_description:"desc",item_pic:"tbd", seller_id:1})
Auction.create({item_name:"flute",item_description:"desc",item_pic:"tbd", seller_id:1})
Auction.create({item_name:"tuba",item_description:"desc",item_pic:"tbd", seller_id:1})
Auction.create({item_name:"trumpet",item_description:"desc",item_pic:"tbd", seller_id:1})



Bid.create({amount:10,bidder_id:2,auction_id:1})
Bid.create({amount:10,bidder_id:1,auction_id:2})
Bid.create({amount:10,bidder_id:3,auction_id:4})
Bid.create({amount:10,bidder_id:5,auction_id:2})
Bid.create({amount:10,bidder_id:4,auction_id:3})
