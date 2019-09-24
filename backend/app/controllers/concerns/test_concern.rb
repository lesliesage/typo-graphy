module TestConcern
    extend ActiveSupport::Concern
    class_methods do
        def median(arr)
            cleaned = arr.select{|el| !!el}
            len = cleaned.length
            med = 0
            if len > 0
            sorted = cleaned.sort
            (cleaned[(len - 1) / 2] + cleaned[len / 2]) / 2.0
            end
        end
    end
end