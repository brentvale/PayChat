Rails.application.routes.draw do
  devise_for :users
  
  namespace :api do 
    #API/USERS
    get '/users/all_users_in_organization' => 'users#all_users_in_organization'
    get '/users/fetch_current_user' => 'users#fetch_current_user'
    resources :users
  end
  
  root to: "static_pages#home"
end
