frappe.pages["techbird-crm"].on_page_load = function (wrapper) {
	frappe.ui.make_app_page({
		parent: wrapper,
		title: __("Techbird CRM"),
		single_column: true,
	});
};

frappe.pages["techbird-crm"].on_page_show = function (wrapper) {
	load_desk_page(wrapper);
};

function load_desk_page(wrapper) {
	let $parent = $(wrapper).find(".layout-main-section");
	$parent.empty();

	frappe.require("techbird_crm.bundle.jsx").then(() => {
		frappe.techbird_crm = new frappe.ui.TechbirdCrm({
			wrapper: $parent,
			page: wrapper.page,
		});
	});
}