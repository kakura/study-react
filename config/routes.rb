Rails.application.routes.draw do
  get 'welcome/index'
  get 'product', to: 'welcome#index'
  get 'product/*path', to: 'welcome#index'
  resources :api
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'welcome#index'
end
