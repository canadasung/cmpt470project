Rails.application.routes.draw do
  root to: 'home#index'
  match "*path", to: "home#index", format: false, via: :get
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
