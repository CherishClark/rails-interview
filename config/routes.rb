Rails.application.routes.draw do

  root to: 'students#index'
  
  resources :students do
    collection do
      get 'js'
    end
  end
end


