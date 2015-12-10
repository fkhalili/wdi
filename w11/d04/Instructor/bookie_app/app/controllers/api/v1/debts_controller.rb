class Api::V1::DebtsController < ApplicationController

  def index
    @debts = Debt.all
    render json: @debts
  end

  def show
    @debt = Debt.find(params[:id])
    render json: @debt
  end

  def create
    @debt = Debt.create(debt_params)
    render json: @debt
  end

  def update
    @debt = Debt.find(params[:id])
    @debt.update(debt_params)
    render json: @debt
  end

  def destroy
    @debt = Debt.find(params[:id])
    render json: 'delete'
  end

  private
  def debt_params
    params.permit(:client, :amount)
  end


end