class Patient < ApplicationRecord
  validates :first_name, :last_name, :date_of_birth, :mrn, presence: true
end
