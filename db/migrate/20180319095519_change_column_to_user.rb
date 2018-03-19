class ChangeColumnToUser < ActiveRecord::Migration[5.1]
  def change
    rename_column :users, :pwd, :password
  end
end
