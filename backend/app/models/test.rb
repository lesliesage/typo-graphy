class Test < ApplicationRecord
    belongs_to :user
    belongs_to :snippet
    
    include ::TestConcern
    def self.medians()
        processed = {}
        processed[:alpha] = median(Test.all.map{|el| el.alpha})
        processed[:numeric] = median(Test.all.map{|el| el.numeric})
        processed[:tilde] = median(Test.all.map{|el| el.tilde})
        processed[:backtick] = median(Test.all.map{|el| el.backtick})
        processed[:exclamation] = median(Test.all.map{|el| el.exclamation})
        processed[:at] = median(Test.all.map{|el| el.at})
        processed[:octothorpe] = median(Test.all.map{|el| el.octothorpe})
        processed[:dollar] = median(Test.all.map{|el| el.dollar})
        processed[:percent] = median(Test.all.map{|el| el.percent})
        processed[:carrot] = median(Test.all.map{|el| el.carrot})
        processed[:ampersand] = median(Test.all.map{|el| el.ampersand})
        processed[:star] = median(Test.all.map{|el| el.star})
        processed[:open_paren] = median(Test.all.map{|el| el.open_paren})
        processed[:close_paren] = median(Test.all.map{|el| el.close_paren})
        processed[:long_dash] = median(Test.all.map{|el| el.long_dash})
        processed[:dash] = median(Test.all.map{|el| el.dash})
        processed[:plus] = median(Test.all.map{|el| el.plus})
        processed[:equals] = median(Test.all.map{|el| el.equals})
        processed[:open_curly] = median(Test.all.map{|el| el.open_curly})
        processed[:close_curly] = median(Test.all.map{|el| el.close_curly})
        processed[:open_bracket] = median(Test.all.map{|el| el.open_bracket})
        processed[:close_bracket] = median(Test.all.map{|el| el.close_bracket})
        processed[:pipe] = median(Test.all.map{|el| el.pipe})
        processed[:backslash] = median(Test.all.map{|el| el.backslash})
        processed[:colon] = median(Test.all.map{|el| el.colon})
        processed[:semicolon] = median(Test.all.map{|el| el.semicolon})
        processed[:doublequote] = median(Test.all.map{|el| el.doublequote})
        processed[:singlequote] = median(Test.all.map{|el| el.singlequote})
        processed[:open_angle] = median(Test.all.map{|el| el.open_angle})
        processed[:close_angle] = median(Test.all.map{|el| el.close_angle})
        processed[:comma] = median(Test.all.map{|el| el.comma})
        processed[:period] = median(Test.all.map{|el| el.period})
        processed[:question] = median(Test.all.map{|el| el.question})
        processed[:slash] = median(Test.all.map{|el| el.slash})
        processed
    end
end
