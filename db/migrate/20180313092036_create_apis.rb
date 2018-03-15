class CreateApis < ActiveRecord::Migration[5.1]
  def change
    create_table :apis do |t|
      t.string :name
      t.text :descript

      t.timestamps
    end
  end
end
