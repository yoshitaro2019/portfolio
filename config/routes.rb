Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'home#index'
  get 'home/bootstrap01'
  get 'home/bootstrap02'
  get 'home/kurisuta01'
  get 'home/kurisuta02'
  get 'home/chat_space'
  get 'home/freemarket61'
  get 'home/about'
  get 'home/skills'

  
end
