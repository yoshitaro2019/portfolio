class HomeController < ApplicationController

  def index
  end

  def bootstrap01
  end

  def bootstrap02
  end

  def kurisuta01
  end

  def kurisuta02
  end

  def chat_space 
  end

  def freemarket61 
  end

  def about 
    @user_name = "Michiko Sakai"
    @birthday = "1986/01/07"
    date_format = "%Y%m%d"
    birthday = @birthday.to_date
    @age = (Date.today.strftime(date_format).to_i - birthday.strftime(date_format).to_i) / 10000
  end

  
end
