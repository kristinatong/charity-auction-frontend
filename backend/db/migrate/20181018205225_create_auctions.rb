class CreateAuctions < ActiveRecord::Migration[5.2]
  def change
    create_table :auctions do |t|
      t.string :item_name
      t.string :item_description
      t.datetime :start_date
      t.datetime :end_date
      t.string :item_pic
      t.integer :seller_id

      t.timestamps
    end
  end
end
