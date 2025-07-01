class Patient < ApplicationRecord
  validates :first_name, :last_name, :date_of_birth, :mrn, :primary_care_provider, presence: true
end
