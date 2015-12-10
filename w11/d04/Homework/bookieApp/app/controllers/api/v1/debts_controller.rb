class Api::V1::DebtsController < ApplicationController

  def index
    @debts = Debt.all
    render json: @debts
  end

  def show
    @debt = Debt.find(params[:id])
    render json: @debt
  end

  def update
    @debt = Debt.find(params[:id])
    @debt.update(debt_params)
    render json: @debt
  end

  def destroy
    @debt = Debt.find(params[:id])
    render json: 'deleted'
  end

  private

  def debt_params
    params.require(:debt).permit(:client_name, :amount, :paid)
  end

end