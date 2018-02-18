Rails.application.routes.draw do
  resources :students do
    collection do
      get 'js'
    end 
  end

post 'foo', to: 'students#foo'

 
end


