//copyright by jason [AT] dayoo.com


dyCalendar = function (/*?year|timeStamp, ?month*/) {
	if (arguments.length == 1)
	{
		this.dateObject = new Date();
	} else {
		this.dateObject = new Date(arguments[0], arguments[1], arguments.length>2?arguments[2]:1);
		this.selectedDate = new Date();
	}
}

dyCalendar.prototype.isEndOfMonth = function () {
	var checkMonth = new Date(this.getFullYear(), this.getMonth(), this.getDate()+1);

	return checkMonth.getMonth() > this.getMonth() || checkMonth.getFullYear() > this.getFullYear();
}

dyCalendar.prototype.isStartOfMonth = function () {
	return this.getDate() == 1;
}

dyCalendar.prototype.isEndOfWeek = function () {
	return this.getDay() >= 6; //暂时硬定为星期六为最后一日
}

dyCalendar.prototype.isStartOfWeek = function () {
	return this.getDay() == 0; //暂时硬定为星期日为第一日
}

dyCalendar.prototype.next = function (num) {
	if (!num)
	{
		num = 1;
	}
	this.dateObject = new Date(this.getFullYear(), this.getMonth(), this.getDate()+num);
	return true;
}

dyCalendar.prototype.prev = function (num) {
	if (!num)
	{
		num = 1;
	}
	this.dateObject = new Date(this.getFullYear(), this.getMonth(), this.getDate()-num);
	return true;
}

dyCalendar.prototype.isSelectedDate = function () {
	return this.getFullYear() == this.selectedDate.getFullYear() && this.getMonth() == this.selectedDate.getMonth() && this.getDate() == this.selectedDate.getDate();
}

dyCalendar.prototype.setSelectedDate = function (selectedDate) {
	this.selectedDate = selectedDate;
}

dyCalendar.prototype.isToday = function () {
	var now = new Date();
	return this.getFullYear() == now.getFullYear() && this.getMonth() == now.getMonth() && this.getDate() == now.getDate();
}

dyCalendar.prototype.getWeekDay = function () {
	return this.dateObject.getDay();
}

dyCalendar.prototype.getDay = function () {
	return this.dateObject.getDay();
}

dyCalendar.prototype.getDate = function () {
	return this.dateObject.getDate();
}

dyCalendar.prototype.getMonth = function () {
	return this.dateObject.getMonth();
}

dyCalendar.prototype.getFullYear = function () {
	return this.dateObject.getFullYear();
}

dyCalendar.prototype.getTime = function () {
	return this.dateObject.getTime();
}